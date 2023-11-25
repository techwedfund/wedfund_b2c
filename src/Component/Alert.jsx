import React from 'react'

function Alert() {
  return (
    <div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Your Form has been submitted successfully</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}

export default Alert