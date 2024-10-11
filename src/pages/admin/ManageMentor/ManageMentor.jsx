import ManageUsers from "../ManageUsers/ManageUsers";

function ManageMentor() {
    return (
        <div>
            <ManageUsers roleFilter="Mentor" showAddButton={false} />
        </div>
    );
}

export default ManageMentor;
