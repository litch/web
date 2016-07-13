import React from 'react';
import Form from './Form';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import ClearButton from './ClearButton';
import styles from './TableFilterForm.css';
import * as data from './TableFilter.config';
import { connect } from 'react-redux';
import { submitForm, clearForm } from '../../actions';

const TableFilterForm = ({ submitForm, clearForm }) => (
  <Form name="tableFilter" className={styles.form}>
    <FormField
      name="withHeroId"
      label="your team had these heroes"
      dataSource={data.heroList}
      dataSourceConfig={data.heroConfig}
      className={styles.field}
      strict
    />
    <FormField
      name="againstHeroId"
      label="their team had these heroes"
      dataSource={data.heroList}
      dataSourceConfig={data.heroConfig}
      className={styles.field}
      strict
    />
    <FormField
      name="includedAccountId"
      label="included these players"
      className={styles.field}
    />
    <FormField
      name="excludedAccountId"
      label="excluded these players"
      className={styles.field}
    />
    <FormField
      name="heroId"
      label="your hero"
      dataSource={data.heroList}
      dataSourceConfig={data.heroConfig}
      className={styles.field}
      strict
    />
    <FormField
      name="isRadiant"
      label="faction"
      dataSource={data.factionList}
      dataSourceConfig={data.genericConfig}
      className={styles.field}
      strict
    />
    <FormField
      name="win"
      label="result"
      dataSource={data.resultList}
      dataSourceConfig={data.genericConfig}
      className={styles.field}
      strict
    />
    <FormField
      name="laneRole"
      label="lane"
      dataSource={data.laneList}
      dataSourceConfig={data.genericConfig}
      className={styles.field}
      strict
    />
    <FormField
      name="patch"
      label="patch"
      dataSource={data.patchList}
      dataSourceConfig={data.genericConfig}
      className={styles.field}
      maxSearchResults={100}
      strict
    />
    <FormField
      name="gameMode"
      label="game mode"
      dataSource={data.modeList}
      dataSourceConfig={data.genericConfig}
      className={styles.field}
      maxSearchResults={100}
      strict
    />
    <FormField
      name="lobbyType"
      label="lobby type"
      dataSource={data.lobbyTypeList}
      dataSourceConfig={data.genericConfig}
      className={styles.field}
      maxSearchResults={100}
      strict
    />
    <FormField
      name="date"
      label="date"
      dataSource={data.dateList}
      dataSourceConfig={data.genericConfig}
      className={styles.field}
      strict
      limit={1}
    />
    <FormField
      name="region"
      label="region"
      dataSource={data.regionList}
      dataSourceConfig={data.genericConfig}
      className={styles.field}
      strict
    />
    <FormField
      name="limit"
      label="number of matches"
      className={styles.field}
      limit={1}
    />
    <div className={styles.buttonContainer}>
      <ClearButton label="reset the thing" clearForm={clearForm} style={{ marginRight: 10 }} />
      <SubmitButton label="do the thing" submitForm={submitForm} />
    </div>
  </Form>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitForm: () => dispatch(submitForm(ownProps.submitAction.bind(null, ownProps.id), 'tableFilter')),
  clearForm: () => dispatch(clearForm('tableFilter')),
});

export default connect(null, mapDispatchToProps)(TableFilterForm);
