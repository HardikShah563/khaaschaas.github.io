// importing from react
import { useState } from "react";

export default function SingleFAQ(props) {
    const [visiblity, setVisiblity] = useState(false);

    function toggleVisiblity() {
        setVisiblity(prevVisiblity => !prevVisiblity);
    }

    return (
        <>
            <div className="faq">
                <div className="faq-question margin-block-10 flex" onClick={toggleVisiblity}>
                    <div className="bobby">{props.faqQuestion}</div>
                    <div className="plus-icon cur" onClick={toggleVisiblity}>+</div>
                    <div className={`answer ${visiblity && "visible"}`}>
                        {props.faqSolution}
                    </div>
                </div>
            </div>
        </>
    );
};
