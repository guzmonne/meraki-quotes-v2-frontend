import WorkBook from '../workbook.xml.js'
import WorkSheet from '../worksheet.xml.js'
import Table from '../table.xml.js'
import EmptyRow from '../empty-row.xml.js'
import Header from './meraki-quote-header.xml.js'
import Styles from './meraki-quote-styles.xml.js'
import {
	Columns,
	Thead,
	SubHeaderRow,
	HardwareRow,
	LicenseRow,
	ServiceRow,
	AdminRow,
	HardwareFinancingRow,
	LicenseFinancingRow,
	UnifiedSolutionPanel,
	AdministeredSolutionPanel,
	TraditionalSolutionPanel
} from './meraki-quote-table-body.xml.js'

import {
  isHardware,
  isLicense,
} from '../services.js'

export default (quote, isLogActivated) => 
	WorkBook(
		Header(quote) +
		Styles +
		WorkSheet('Quote', 
			Table(
				Columns +
				Thead   +
        SubHeaderRow('Hardware') +
        quote
          .Devices
          .filter(isHardware)
          .map(hardware => HardwareRow(hardware, quote))
          .join('') +
        SubHeaderRow('Software') + 
        quote
          .Devices
          .filter(isLicense)
          .map(license => LicenseRow(license, quote))
          .join('') +
				SubHeaderRow('Administración, Soporte y Financiación') +
				ServiceRow(quote, isLogActivated)   +
				AdminRow(quote, isLogActivated)     +
				LicenseFinancingRow(quote, isLogActivated) +
				HardwareFinancingRow(quote, isLogActivated) +
				EmptyRow() +
				UnifiedSolutionPanel(quote, isLogActivated) +
				EmptyRow() +
				AdministeredSolutionPanel(quote, isLogActivated) +
				EmptyRow() +
				TraditionalSolutionPanel(quote, isLogActivated)
			)
		)
	)
