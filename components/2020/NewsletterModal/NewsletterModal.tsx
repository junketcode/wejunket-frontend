import React from "react"
import "./NewsletterModal.scss"

const NewsletterModal = props => {
  return (
    <div
      className={["modalRoot", props.modalOpen ? "open" : "closed"].join(" ")}
      onClick={props.closeModalHandler}
    >
      <h1 className="closeModalX" onClick={props.closeModalHandler}>
        X
      </h1>
      <div className="iframeContainer">
        <iframe
          title="sign-up form"
          src={
            "https://4122fe51.sibforms.com/serve/MUIEAHsZqi9A1cqKGvRRUGUSeWwxUnbI4CtqPWUuzFBNOXWJjE6i0rum7nNvuqMVOucaxBcnOKdLBFMEWLMSDBhXwI_rVUnpDgknC1ZNBaJ91a_CEZ1ADknbXoxPFS5xS2uBkXxT_QZZfxepxWHT7SzpyeY6t5NkMyXtE8wwZo17jnFQuE07ucFkj9_BtQCFvOfMJnQBo-kl3I8g"
          }
        />
      </div>
    </div>
  )
}

export default NewsletterModal
