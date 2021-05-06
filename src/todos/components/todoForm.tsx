import { FunctionComponent } from "react";
import { Button } from "../../shared-components/button/button";
import { InputText } from "../../shared-components/input/text";

const TodoForm: FunctionComponent = () => {
    return (
        <div className="card-header">
            <form>
                <InputText />
                <Button color="success" text="Add" />
            </form>
        </div>
    );

}
export default TodoForm;