// Add onClick props later
export const Button = ({ color, text }) => {
    return (
        <button  className={`btn ${color}`}>
            {text}
        </button>
    );
}