import './Modal.css';
import { Input } from './Input';
export function Modal(){
    
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
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}