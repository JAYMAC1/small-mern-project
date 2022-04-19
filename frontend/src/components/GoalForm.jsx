import React, { useState, useEffect } from 'react'
import { createGoal } from '../features/goals/goalSlice'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const GoalForm = () => {
  const [formData, setFormData] = useState({
    text: '',
  })

  const { text } = formData

  const dispatch = useDispatch()

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.goals
  )

  // dispatch(getGoals())

  useEffect(() => {
    // dispatch(getGoals())
    if (isError) {
      toast.error(message)
    }
  }, [isError, isSuccess, message, dispatch])

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createGoal({ ...formData }))
    setFormData({
      text: '',
    })
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
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
