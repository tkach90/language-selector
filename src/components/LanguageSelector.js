import React from "react";
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {
        return (
            <>
                Select a language:
                <i
                    className='flag us'
                    onClick={() => this.context.onLanguageChange('english')}
                />
                <i
                    className='flag ua'
                    onClick={() => this.context.onLanguageChange('ukrainian')}
                />
            </>
        )
    }
}

export default LanguageSelector;