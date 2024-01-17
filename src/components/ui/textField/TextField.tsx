import {
  ComponentProps,
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  MemoExoticComponent,
  RefAttributes,
  SVGProps,
  useState,
} from 'react'

import { clsx } from 'clsx'

import ClosedEye from '../../../assets/icons/ClosedEye.tsx'
import Eye from '../../../assets/icons/Eye.tsx'
import { Typography } from '../typography'

import s from './text-field.module.scss'

export type TextFieldProps = {
  onValueChange?: (value: string) => void
  containerProps?: string
  labelProps?: ComponentProps<'label'>
  errorMessage?: string
  label?: string
  Icon?: MemoExoticComponent<
    ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>>
  >
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      errorMessage,
      Icon,
      placeholder,
      type,
      containerProps,
      labelProps,
      label,
      onChange,
      onValueChange,
      ...restProps
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const [containerFocused, setContainerFocused] = useState(false)
    const isShowPasswordButtonShown = type === 'password'

    const finalType = getFinalType(type, showPassword)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    const classNames = {
      root: clsx(s.root, containerProps),
      fieldContainer: clsx(
        containerFocused ? `${s.fieldContainer} ${s.containerFocused}` : s.fieldContainer
      ),
      field: clsx(s.field, !!errorMessage && s.error, className),
      label: clsx(s.label, labelProps?.className),
      error: clsx(s.error),
      icon: clsx(s.icon),
    }

    const focusedHandler = () => {
      setContainerFocused(true)
    }

    const unFocusedHandler = () => {
      setContainerFocused(false)
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography variant="body2" as="label" className={classNames.label}>
            {label}
          </Typography>
        )}
        <div
          onFocus={focusedHandler}
          onBlur={unFocusedHandler}
          className={classNames.fieldContainer}
        >
          {Icon && <Icon className={classNames.icon} />}
          {/*<SearchIcon />*/}
          <input
            className={classNames.field}
            placeholder={placeholder}
            ref={ref}
            type={finalType}
            onChange={handleChange}
            {...restProps}
          />
          {isShowPasswordButtonShown && (
            <button
              className={s.showPassword}
              type={'button'}
              onClick={() => setShowPassword(prev => !prev)}
            >
              {/*{showPassword ? <VisibilityOff /> : <Eye />}*/}
              {showPassword ? <ClosedEye /> : <Eye />}
            </button>
          )}
        </div>

        <Typography variant="error" className={classNames.error}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
