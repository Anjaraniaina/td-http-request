import './Modal.css';
import { Input } from './Input';
export function Modal({request, closeModal}){
    
    return(
        <div className='modal-background'>
            <div className='modal-container'>
                
                <form>
                    <Input label="Name" type="text" placeholder=""/>
                    <Input label="Username" type="text" placeholder=""/>
                    <Input label="Email" type="email" placeholder="xxxx@xxx.xx"/>
                    <Input label="Phone" type="text" placeholder=""/>
                    <Input label="City" type="text" placeholder=""/>
                    <Input label="Street" type="text" placeholder=""/>
                    <button type="submit" className="btn btn-primary">{request}</button>
                </form>
                <div 
                onClick={() => closeModal(false)}
                ><button id="cancelButton" className="my-3 btn btn-primary">Cancel</button></div>
            </div>
        </div>
    )
}