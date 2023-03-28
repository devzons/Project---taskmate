export const AddTask = () => {
  return (
    <section className='addTask'>
      <form>
        <input type='text' name='task' id='task' autocomplete='off' maxLength='25' placeholer='add task' />
        <button type='submit'>Add</button>
      </form>
    </section>
  )
}
