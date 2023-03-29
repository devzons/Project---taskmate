export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const date = new Date()
    // update task or new task ?
    if (task.id) {
      const updatedTasklist = tasklist.map((todo) => (todo.id === task.id ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo))
      setTasklist(updatedTasklist)
    } else {
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      }
      setTasklist([...tasklist, newTask])
    }
    setTask({})
  }

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={task.name || ''} name='task' id='task' autoComplete='off' maxLength='25' placehold er='add task' onChange={(e) => setTask({ ...task, name: e.target.value })} />
        <button type='submit'>Add</button>
      </form>
    </section>
  )
}
