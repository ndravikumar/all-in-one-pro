import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {Dropdown, DropdownMenu, DropdownToggle} from "reactstrap";
import SearchBox from "components/SearchBox";
import MailNotification from "../../../../components/MailNotification";
import AppNotification from "../../../../components/AppNotification";
import CardHeader from "components/dashboard/Common/CardHeader/index";
import IntlMessages from "util/IntlMessages";
import LanguageSwitcher from "components/LanguageSwitcher/index";
import {switchLanguage, toggleCollapsedNav} from "../../../../actions";

const Header =(props)=> {

  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [searchBox, setSearchBox] = useState(false);
  const [mailNotification, setMailNotification] = useState('');
  const [userInfo, setUserInfo] = useState(false);
  const [langSwitcher, setLangSwitcher] = useState(false);
  const [appNotification, setAppNotification] = useState(false);
  const [apps, setApps] = useState(false);


  const locale = useSelector(({settings}) => settings.locale);

  const  onAppNotificationSelect = () => {
      setAppNotification(!appNotification);
  };

  const onMailNotificationSelect = () => {
    setMailNotification(!mailNotification)
  };

  const onLangSwitcherSelect = () => {
    setLangSwitcher(!langSwitcher);
  };

  const onSearchBoxSelect = () => {
    setSearchBox(!searchBox);
  };

  const onAppsSelect = () => {
    setApps(!apps);
  };

  const onUserInfoSelect = () => {
    setUserInfo(!userInfo);
  };

  const handleRequestClose = () => {
    setLangSwitcher(false);
    setUserInfo(false);
    setMailNotification(false);
    setAppNotification(false);
    setSearchBox(false);
    setApps(false);
  };

  const onToggleCollapsedNav = (e) => {
    const val = !props.navCollapsed;
    dispatch(toggleCollapsedNav(val));
  };

  const onSwitchLanguage = (lang) => {
    dispatch(switchLanguage(lang))
  };

  const Apps = () => {
    return (
      <ul className="jr-list jr-list-half">
        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/calendar/basic">
            <i className="zmdi zmdi-calendar zmdi-hc-fw"/>
            <span className="jr-list-text"><IntlMessages id="sidebar.calendar.basic"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/to-do">
            <i className="zmdi zmdi-check-square zmdi-hc-fw"/>
            <span className="jr-list-text"><IntlMessages id="sidebar.appModule.toDo"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/mail">
            <i className="zmdi zmdi-email zmdi-hc-fw"/>
            <span className="jr-list-text"><IntlMessages id="sidebar.appModule.mail"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/chat">
            <i className="zmdi zmdi-comment zmdi-hc-fw"/>
            <span className="jr-list-text"><IntlMessages id="sidebar.appModule.chat"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/contact">
            <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
            <span className="jr-list-text"><IntlMessages id="sidebar.appModule.contact"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/">
            <i className="zmdi zmdi-plus-circle-o zmdi-hc-fw"/>
            <span className="jr-list-text">Add New</span>
          </Link>
        </li>
      </ul>)
  };

  const updateSearchText =(evt)=> {
    setSearchText(evt.target.value);
  };

    return (
      <AppBar
        className="app-main-header">
        <Toolbar className="app-toolbar" disableGutters={false}>
            <div className="d-block d-md-none pointer mr-3" onClick={onToggleCollapsedNav}>
                            <span className="jr-menu-icon">
                              <span className="menu-icon"/>
                            </span>
            </div>


          <Link className="app-logo mr-2 d-none d-sm-block" to="/">
            <img src={require("assets/images/logo.png")} alt="Jambo" title="Jambo"/>
          </Link>


          <SearchBox styleName="d-none d-lg-block" placeholder=""
                     onChange={updateSearchText}
                     value={searchText}/>

          <ul className="header-notifications list-inline ml-auto">
            <li className="d-inline-block d-lg-none list-inline-item">
              <Dropdown
                className="quick-menu nav-searchbox"
                isOpen={searchBox}
                toggle={onSearchBoxSelect}>

                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">
                  <IconButton className="icon-btn">
                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right className="p-0">
                  <SearchBox styleName="search-dropdown" placeholder=""
                             onChange={updateSearchText}
                             value={searchText}/>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>

          <div className="ellipse-shape"/>
        </Toolbar>
      </AppBar>
    );
  };

export default Header;
