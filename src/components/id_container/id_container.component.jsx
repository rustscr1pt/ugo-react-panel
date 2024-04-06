import './id_container.style.sass';

const IDContainer = (props) => {
    return (
        <div className='black-id-flex-container'>
            <span className='black-id-flex-container__span'>{props.id}</span>
        </div>
    )
}

// class IDContainer extends Component {
//     render() {
//         return (
//             <div className='black-id-flex-container'>
//                 <span className='black-id-flex-container__span'>{this.props.id}</span>
//             </div>
//         )
//     }
// }

export default IDContainer;