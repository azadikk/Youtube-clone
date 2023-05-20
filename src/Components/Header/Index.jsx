import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../store/slice/sidebarSlice';

export default function Header() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSidebar());
  }

  return (
    <div className="header">
      <div className="header-left">
        <i className="bi bi-list" onClick={handleClick}/>
        <img src="youtube-logo.png" />
        <h1>YouTube</h1>
        <span>AZ</span>
      </div>

      <div className="header-center">
        <div className="search">
          <input type="search" placeholder="Ara" />
          <i
            className="bi bi-search"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Ara"
          />
        </div>
        <i
          className="bi bi-mic-fill"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Sesle arama yapın"
        />
      </div>

      <div className="header-right">
        <i
          className="bi bi-camera-video"
          data-toggle="tooltip"
          title="Oluştur"
        />
        <i className="bi bi-bell" data-toggle="tooltip" title="Bildirimler" />
        <img src="profile.jpg" />
      </div>
    </div>
  );
}
