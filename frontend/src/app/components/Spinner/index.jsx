import "./style.scss"


function Spinner(props) {
    return (
        <div className="spinner-wrapper">
            <div class="spring-spinner">
                <div class="spring-spinner-part top">
                    <div class="spring-spinner-rotator"></div>
                </div>
                <div class="spring-spinner-part bottom">
                    <div class="spring-spinner-rotator"></div>
                </div>
            </div>
        </div>
    );
}

export default Spinner;