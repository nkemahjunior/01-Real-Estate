import { FacebookOutlined, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex justify-between border-solid border-t-2  text-xs p-2">
            <div>&copy;{currentYear} Zeco Estate. All rights reserved</div>
            <div className="flex space-x-2">
                <div><FacebookOutlined/></div>
                <div><Instagram/></div>
                <div><Twitter/></div>
                <div><LinkedIn /></div>
            </div>
        </div>
    )
}

export default Footer
