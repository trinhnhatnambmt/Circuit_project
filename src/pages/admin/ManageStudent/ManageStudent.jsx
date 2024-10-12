import ManageUsers from "../ManageUsers/ManageUsers";

function ManageStudent() {
    return (
        <div>
            <ManageUsers roleFilter="STUDENT" showAddButton={false} />
        </div>
    );
}

export default ManageStudent;
