import get from 'lodash/get';
import {connect} from 'react-redux';
import GravatarPicture from './GravatarPicture/';
import md5 from '../../../modules/md5.js';

const mapStateToProps = (state) => ({
  pictureSource: `https://www.gravatar.com/avatar/${
    md5(get(state, 'ui.user.email'))
  }`,
});

const mapActionsToProps = {};

const GravatarPictureContainer = connect(mapStateToProps, mapActionsToProps)(GravatarPicture);

GravatarPictureContainer.displayName = 'GravatarPictureContainer';

export default GravatarPictureContainer;
