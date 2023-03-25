import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import '../../Styles/footBar.css'
const FootBar=()=> {
    return(
        <div className="container">
        <h6>Made with
        <FavoriteIcon
                            style={{ cursor: "pointer" }}
                            sx={{ fontSize: "40px", paddingLeft: "15px" , color: red[500]  }}
                        />
       {" "} from Anish</h6>
        </div>
    )
}

export default FootBar;