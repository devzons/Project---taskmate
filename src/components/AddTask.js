export const AddTask = ({ tasklist, setTasklist }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const date = new Date()
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    }
    setTasklist([...tasklist, newTask])
    e.target.task.value = ''
  }

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='task' id='task' autocomplete='off' maxLength='25' placeholer='add task' />
        <button type='submit'>Add</button>
      </form>
    </section>
  )
}
