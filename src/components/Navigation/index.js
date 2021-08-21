import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Search from '@material-ui/icons/Search';
import defaultUserImg from 'assets/images/default-user.png';
import logoUrl from 'assets/images/logo2.png';
import SearchInputCustom from 'components/UI/SearchInputCustom';
import { ROUTES } from 'constant';
import { cloudinaryImgOptimize } from 'helper';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SettingMenu from './SettingMenu';
import useStyle from './style';

function Navigation() {
  const classes = useStyle();
  const theme = useTheme();
  const isXsDevice = useMediaQuery(theme.breakpoints.up('xs'));

  const { avt, isAuth } = useSelector((state) => state.userInfo);
  const avtSrc = Boolean(avt)
    ? cloudinaryImgOptimize(avt, 48, 48)
    : defaultUserImg;
  const [showInput, setShowInput] = useState(isXsDevice);
  const [anchorMenu, setAnchorMenu] = useState(null);

  const onOpenMenu = (e) => setAnchorMenu(e.currentTarget);
  const onCloseMenu = () => setAnchorMenu(null);

  return (
    <div className={`${classes.navWrapper} w-100vw`} id="dynoNav">
      <div className={`${classes.nav} w-100`}>
        <div className="container h-100 flex-center--ver">
          {/* Logo */}
          {(isXsDevice || !showInput) && (
            <>
            <Link to="/IPA">
              <img
                className={`${classes.imgSize} ${classes.logo}`}
                src={logoUrl}
                alt="Logo"
              />
            </Link>
            <h2 className={`${classes.textLogo}`}>
              VISION ENGLISH CLASS
            </h2>
            </>
          )}

          {/* control, setting */}
          <div className={`${classes.control} flex-center--ver`}>
            {showInput && !isXsDevice && (
              <ArrowBackIosIcon
                className={`${classes.iconSize} mr-4 cur-pointer`}
                onClick={() => setShowInput(!showInput)}
              />
            )}

            {/* Search bar */}
            <div className="mr-5" >
              <h3 className={`${classes.textRight}`}>
                Notebook IPA
              </h3>
            </div>
           
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default Navigation;
