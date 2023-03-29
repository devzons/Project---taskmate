export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleEdit = (id) => {
    const selectedTask = tasklist.find((todo) => todo.id === id)
    setTask(selectedTask)
  }

  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter((todo) => todo.id !== id)
    setTasklist(updatedTasklist)
  }
  return (
    <section className='showTask'>
      <div className='head'>
        <div>
          <span className='title'>Todo</span>
          <span className='count'>{tasklist.length}</span>
        </div>
        <button className='clearAll' onClick={() => setTasklist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist &&
          tasklist.map((task) => (
            <li key={task.id}>
              <p>
                <span className='name'>{task.name}</span>
                <span className='time'>{task.time}</span>
              </p>
              <i onClick={() => handleEdit(task.id)} className='bi bi-pencil-square'></i>
              <i onClick={() => handleDelete(task.id)} className='bi bi-trash'></i>
            </li>
          ))}
      </ul>
    </section>
  )
}
