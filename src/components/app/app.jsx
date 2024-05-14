import BlackHeader from "../black_header"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {useSelector} from "react-redux";
import {Auth} from "../auth/auth.component";
import {Screens} from "../screens/Screens.component";
import {CheckAndAuth} from "./_functions/CheckAndAuth";


export const App = () => {
    const auth = useSelector((state) => state.auth.value);

    // Check sessionStorage for token. If it's detected - make a check + redirect and skip login screen
    CheckAndAuth();

    if (!auth) {
        return (
            <div className='app_flex_centered_vertical'>
                <BlackHeader/>
                <Auth/>
            </div>
        )
    }
    else {
        return (
            <div className='app_flex_centered_vertical'>
                <BlackHeader/>
                <Screens/>
            </div>
        )
    }
}
