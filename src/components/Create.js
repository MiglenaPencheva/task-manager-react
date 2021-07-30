import { create } from '../services/taskService';
import AuthPage from '../pages/authPage/AuthPage';

const CreateTask = (props) => {

    const onCreateTaskSubmitHandler = async (e) => {
        e.preventDefault();

        const { content } = e.target;
        if (content.value === '') {
            throw new Error('Въведи съдържание');
        }

        const data = {
            content: content.value
        };

        try {
            const result = await create(data);
            console.log('created', result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {props.isLoggidIn ? (
                <div>
                    <h3>Създай задача</h3>

                    <form onSubmit={onCreateTaskSubmitHandler} className="create-form">

                        <textarea type="text" placeholder="Съдържание..." name="content"></textarea>

                        <div className="task-actions">

                            <a href="/to-do">
                                <i className='fas fa-times'>
                                    <p>Отказ</p>
                                </i>
                            </a>

                            <button type="submit">
                                <i className='fas fa-save'>
                                    <p>Създай</p>
                                </i>
                            </button>

                        </div>

                    </form>
                </div>)
                : <AuthPage />}
        </div>
    );
};

export default CreateTask;