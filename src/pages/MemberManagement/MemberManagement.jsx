import { Container } from "@mui/material";
import "./index.scss";
import Header from "~/components/Header/Header";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "~/apis/mock-data";

function MemberManagement() {
    return (
        <div className="member__management">
            <Header />
            <Container disableGutters maxWidth={false}>
                <BoardBar board={mockData?.board} />
                <BoardContent board={mockData?.board}/>
            </Container>
        </div>
    );
}

export default MemberManagement;
