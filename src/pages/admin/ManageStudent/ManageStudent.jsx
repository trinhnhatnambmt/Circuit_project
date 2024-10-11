import ManageUsers from "../ManageUsers/ManageUsers";

function ManageStudent() {
    return (
        <div>
            <ManageUsers roleFilter="Student" showAddButton={false} />
        </div>
    );
}

export default ManageStudent;
