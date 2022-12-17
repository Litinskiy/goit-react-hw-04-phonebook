import PropTypes from "prop-types";
import { Btn, ContactItem } from "./ContactList.styled"

export function ContactList({ contacts, deleteContact }) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return (
                    <ContactItem key={id}>{name}:{ number}
                        <Btn type="button" onClick={() => { deleteContact(id)}}>Delete</Btn>
                   </ContactItem> 
                )
            })}
            
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,).isRequired,
    deleteContact: PropTypes.func.isRequired,
}