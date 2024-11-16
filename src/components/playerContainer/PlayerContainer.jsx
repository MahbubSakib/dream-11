import Available from '../Available';
import Selected from '../Selected';
import './PlayerContainer.css'

const PlayerContainer = ({handleActive, isActive, handleSelected, selected, handleRemove}) => {
    
    return (
        <div>
            <div className='w-10/12 mx-auto my-10 flex justify-end'>
                <div>
                    <button className={`${isActive.active?'btn isActive':'btn'}`} onClick={ () => handleActive('active')}>Available</button>
                    <button className={`${isActive.active?'btn':'btn isActive'}`} onClick={ () => handleActive('notActive')}>Selected({selected.length})</button>
                </div>
            </div>

            {isActive.active?<Available handleSelected={handleSelected}></Available>:<Selected handleRemove={handleRemove} handleActive={handleActive} selected={selected}></Selected>}
        </div>
    );
};

export default PlayerContainer;