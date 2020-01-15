import React from 'react';
import '../styles/SubMenu-Styles.css';

class SubMenu extends React.Component {
    constructor() {
        super()
        this.state = {
            showSubMenu: false
        }
        this.showSubMenu = this.showSubMenu.bind(this)
        this.closeSubMenu =  this.closeSubMenu.bind(this)
    }
    
    showSubMenu() {
        this.setState({
            showSubMenu: true
        }, document.addEventListener('click', this.closeSubMenu))
    }

    closeSubMenu(event) {
        if(! this.dropDownMenu.contains(event.target))
        {
            this.setState({
                showSubMenu: false
            }, document.removeEventListener('click', this.closeSubMenu))
        }
    }

    render() {
        return (
            <>
                <button className="ext-btn" onClick={this.showSubMenu}>
                    <i className={`fas ${this.props.btnIcon}`}></i>
                    {this.state.showSubMenu ?
                        <div className="sub-menu" ref={element => this.dropDownMenu = element}>
                            {
                                this.props.menuItems.map( (item, index) => <li key={index}>{item}</li>)
                            }
                        </div> : null
                    }
                </button>

            </>
        )
    }
}

export default SubMenu