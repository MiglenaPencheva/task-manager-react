const CreateTask = () => {
    return (
        <div>
            <h3>Създай задача</h3>

            <form className="create-form" method="POST">

                <textarea type="text" placeholder="Съдържание..." name="content"></textarea>

                <div className="task-actions">

                    <a href="/to-do" onclick="return confirm('Сигурен ли си, че се отказваш?');">
                        <i className='fas fa-times'>
                            <p>Отказ</p>
                        </i>
                    </a>

                    <button type="submit" onclick="return confirm('Сигурен ли си, че искаш да създадеш тази задача?');">
                        <i className='fas fa-save'>
                            <p>Създай</p>
                        </i>
                    </button>

                </div>

            </form>
        </div>
    );
};

export default CreateTask;