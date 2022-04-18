import React, { useState, useEffect } from 'react'
import { createGoal, reset } from '../features/goals/goalSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'

const GoalForm = () => {
  const [formData, setFormData] = useState({
    text: '',
  })

  const { text } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess) {
      toast.success(message)
      dispatch(reset())
    }
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ ...formData }))
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='text'
              name='text'
              value={text}
              placeholder='Add new goal'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Add Goal
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
export default GoalForm
