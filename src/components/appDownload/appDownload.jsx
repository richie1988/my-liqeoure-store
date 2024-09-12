import './appDownload.css'
import GoogleStore from '../../assets/GoogleStore.svg'
import AppleStore from '../../assets/AppleStoreLogo.svg'

function appDownload() {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For Better Experience Download The <br/>LiquoreStore App</p>
        <div className="appdownload-platforms">
            <a href='https://play.google.com/store/apps/details?id=com.drinkapp' target='_blank' rel='noreferrer'>
                <img src={GoogleStore} alt='google play'/>
            </a>
            <a href='https://apps.apple.com/us/app/drinkapp/id1234567890' target='_blank' rel='noreferrer'>
                <img src={AppleStore} alt='app store'/>
            </a>
        </div>
    </div>
  )
}

export default appDownload