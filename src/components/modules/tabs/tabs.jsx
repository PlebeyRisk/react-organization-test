import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { colors } from '../../../theme/globalStyle';
import NewOrgForm from '../new-org-form/new-org-form';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const StyledTabPanel = styled(TabPanel)`
  padding: 32px 24px;
  min-height: 568px;
`;

const StyledTabs = withStyles({
  root: {
    backgroundColor: colors.grayTwo,
  },
  indicator: {
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      width: '100%',
      backgroundColor: colors.primary,
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    padding: '0 24px',
    maxWidth: '300px',
    backgroundColor: 'transparent',
    textTransform: 'none',
    color: colors.textFour,
    fontWeight: '600',
    fontSize: theme.typography.pxToRem(12),
    '&:focus': {
      opacity: 1,
    },
    '&::after': {
      marginLeft: '5px',
      color: colors.textThree,
    },
  },
  selected: {
    backgroundColor: colors.light,
    color: colors.textPrimary,
    '&::after': {
      color: colors.textRed,
    },
  },
}))(props => <Tab disableRipple {...props} />);

const StTab = styled(StyledTab)`
  ::after {
    content: '${props => (props.organizationcount ? '(' + props.organizationcount + ')' : '')}';
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: colors.light,
  },
}));

const TabsOrg = ({ organization }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const organizationCount = !organization || organization === null ? 0 : organization.length;

  return (
    <div className={classes.root}>
      <div className={classes.demo}>
        <StyledTabs value={value} onChange={handleChange}>
          <StTab label="Новая организация" />
          <StTab label="Сохраненные организации" organizationcount={organizationCount.toString()} />
        </StyledTabs>
        <StyledTabPanel value={value} index={0}>
          <NewOrgForm />
        </StyledTabPanel>
        <StyledTabPanel value={value} index={1}>
          Item Two
        </StyledTabPanel>
        <Typography />
      </div>
    </div>
  );
};

export default TabsOrg;
