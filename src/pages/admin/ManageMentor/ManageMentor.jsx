import ManageUsers from "../ManageUsers/ManageUsers";

function ManageMentor() {
    return (
        <div>
            <ManageUsers roleFilter="MENTOR" showAddButton={false} />
        </div>
    );
}

export default ManageMentor;
