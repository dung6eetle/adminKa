import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  SimpleForm,
  TextInput,
  PasswordInput,
  SelectInput,
  useTranslate,
} from 'react-admin'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  submit: {
    backgroundColor: '#E94E1B',
    borderRadius: 4,
    '& > span': {
      color: '#fff',
    },
    '&:hover': {
      backgroundColor: '#E94E1B',
      color: '#fff',
    },
    '&:disabled': {
      backgroundColor: '#C7C7C7',
      color: '#545454',
    },
  },
}))

const EventsForm = props => {
  const { handleSubmit } = props
  const [isValid, setIsValid] = useState(false)
  const translate = useTranslate()
  const classes = useStyles()

  const isEmpty = value => !value?.length || !value
  const minLength = (value, min) => value?.length < min
  const maxLength = (value, max) => max < value?.length

  const poles = ['name', 'login', 'password']

  const validate = (values, poles) => {
    const errors = {}
    const min = 3
    const max = 15
    poles.forEach(key => {
      if (isEmpty(values[key]))
        errors[key] = translate('ra.validation.required')
      if (maxLength(values[key], max))
        errors[key] = translate('ra.validation.maxLength', { max: max })
      if (minLength(values[key], min))
        errors[key] = translate('ra.validation.minLength', { min: min })
    })
    setIsValid(!Object.keys(errors).length)
    return errors
  }

  return (
    <SimpleForm toolbar={null} validate={v => validate(v, poles)}>
      <TextInput
        variant='standard'
        label='name'
        source='name'
      />
      <TextInput
        variant='standard'
        label='date'
        source='login'
      />
      <TextInput
        variant='standard'
        label='hto to ehe'
        source='usersName'
      />
      <SelectInput
        variant='standard'
        label='будет выбран ивент родитель'
        initialValue={3}
        disabled={true}
        source='role'
        choices={[{ id: 3, name: 'Спикер' }]}
      />
      <Button
        disabled={!isValid}
        className={classes.submit}
        onClick={handleSubmit}
      >
        {translate('ra.action.save')}
      </Button>
    </SimpleForm>
  )
}

export default EventsForm
