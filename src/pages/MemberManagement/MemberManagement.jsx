import { Container } from "@mui/material";
import "./index.scss";
import Header from "~/components/Header/Header";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "~/apis/mock-data";
import MemberManageContent from "./Content/MemberManageContent";

function MemberManagement() {
    return (
        <div className="member__management">
            <Header />
            <Container disableGutters maxWidth={false}>
                <BoardBar />
                {/* <BoardContent board={mockData?.board} /> */}
                <MemberManageContent />
            </Container>
        </div>
    );
}

export default MemberManagement;
