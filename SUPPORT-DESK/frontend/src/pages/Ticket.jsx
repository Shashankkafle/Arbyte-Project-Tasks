import {useSelector, useDispatch} from 'react-redux'
import Modal from 'react-modal'
import {useEffect, useState }  from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {getTicket,closeTicket} from '../features/tickets/ticketSlice'
import { getNotes,createNote, reset as  notesReset } from '../features/notes/noteSlice'
import Spinner from '../components/Spinner'
import toast from 'toastify'
import { BackButton } from '../components/BackButton'
import NoteItem from '../components/NoteItem'
import { FaPlus } from 'react-icons/fa'

const customStyles = {
    content: {
      width: "600px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      position: "relative",
    },
  };
  
Modal.setAppElement('#root')
function Ticket() {
    const[modalIsOpen, setModalIsOpen] = useState(false)
    const[noteText, setNoteText] = useState('')
    const {ticket,  isLoading, isSuccess, isError, message} = useSelector((state)=>state.tickets)
    const { notes, isLoading: notesIsLoading } = useSelector(
        (state) => state.notes
      )
    const params = useParams()
    const dispatch = useDispatch()
    const {ticketId} = useParams()
    const navigate = useNavigate()
    const onNoteSubmit = (e) => {
        e.preventDefault()
        dispatch(createNote({ noteText, ticketId }))
        closeModal()
      };

    useEffect(()=>{


        if(isError){
            toast.error(message)
            console.log(message)
        }
        dispatch(getTicket(ticketId))
        dispatch(getNotes(ticketId))
        console.log(notes)
    },[isError, ticketId,message])
    const  onTicketClose = ()=>{
        dispatch(closeTicket(ticketId))
        toast.success('Ticket Closed')
        navigate('/tickets')
    }

    const openModal =()=> setModalIsOpen(true)
    const closeModal =()=> setModalIsOpen(false)

    if(isLoading||notesIsLoading){
        return  <Spinner/>
    }
    if(isError){
        return <h3>Something Went Wrong</h3>
    }

  return (
    <div className='ticket-page'>
        <header className="ticket-header">
            <BackButton url='/tickets'/>
            <h2>
                Ticket ID:{ticket._id}
                <span className={`status status-${ticket.status}`}>
                    {ticket.status}
                </span>
            </h2>
            <h3>Date Submited: {new Date(ticket.createdAt).toLocaleString('en-US')}</h3>
            <h3>Product:  {ticket.product}</h3>
            <hr/>
            <h3>Description</h3>
            <p>{ticket.description}</p>
            <h2>Notes</h2>
        </header>
        {
            ticket.status!== 'closed' && (
                <button onClick={openModal} className='btn'>Add Note <FaPlus/></button>
            )
        }
        <Modal isOpen={modalIsOpen} onRequestClose = {closeModal} style={customStyles} contentLabel= 'Add Note'>
            <h2>Add Note</h2>
            <button className="btn-close" onClick={closeModal}>X</button>
            <form onSubmit={onNoteSubmit} >
                <div className="form-group">
                    <textarea 
                        name='noteText'
                        id='noteText'
                        className='form-conrol'
                        placeholder='Note text'
                        value={noteText}
                        onChange={(e)=>setNoteText(e.target.value)}>
                    </textarea>
                </div>
                <div className="form-group">
                 <button className="btn" type="submit">
                     Submit
                 </button>
          </div>
            </form>
        </Modal>
        {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
        {ticket.status!=='closed'&&(
            <button onClick={onTicketClose} className='btn btn-block btn-danger'>Close Ticket</button>
        
        )}
    </div>
  )
}

export default Ticket

