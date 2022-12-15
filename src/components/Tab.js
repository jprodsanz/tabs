import styled from 'styled-components'

const Tab = (props) => {
    const { showTabs } = props
    return (
    <div style={{ display: "inline-block", margin:"auto", width: "85%", textAlign: "center", backgroundColor: "red" }}>
        {
            showTabs.map((tab,index) => (
                <div key={index} className={"tab"}>
                    { tab.title }
                </div>
            ))
        }
    </div>
    )
}

export default Tab