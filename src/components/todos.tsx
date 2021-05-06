import { CardHeader } from "../shared-components"
import { Text } from "../shared-components"
import { Button } from "../shared-components"

const TodosControl = () => {
    return <form>
        <div className="card-container">
            <CardHeader text="Control" />
            <div className="card-content">
                <Text />
                <Button color="black" text="Add" />
            </div>
        </div>
    </form>
}

export default TodosControl;