import React from 'react'
import Rainbow from '../hoc/Rainbow'


const FormTest = (props) => {
    setTimeout(() => {
        console.log("FormTest.4s" + props)
        // props.history.push('/todos')
    }, 4000)
    return (
        <div className="container">
            <h4 className="center">FormTest</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur interdum nibh a iaculis. Nulla euismod libero mi, nec placerat tortor imperdiet non. Pellentesque leo est, luctus vel justo nec, commodo accumsan justo. Vivamus suscipit venenatis libero,</p>
        </div>
    )
}

export default Rainbow(FormTest);