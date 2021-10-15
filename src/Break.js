import IconButton from '@material-ui/core/IconButton';

const Break = (props) => {
    const {length, increment, decrement} = props;

    return (
        <div>
            <p id="break-label">Break</p>

            <IconButton id="break-increment" color="primary"  
            onClick={increment}> 
                <span className="material-icons iconApp">arrow_drop_up</span>
            </IconButton>
            
            <p id="break-length">{length/60}</p>

            <IconButton id="break-decrement" color="primary"  
            onClick={decrement}> 
                <span className="material-icons iconApp">arrow_drop_down</span>
            </IconButton>

        </div>
    )
}

export default Break;