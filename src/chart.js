import {inject, customElement, bindable} from "aurelia-framework";

import {TaskQueue} from "aurelia-task-queue";
import $ from "jquery";
import Hightcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import Theme from "highcharts/themes/dark-unica";


@customElement('chart')

@inject(Element, TaskQueue)
export class Chart {

	chartDefaults = {
		exporting: {
			buttons: {
				contextButton: {
					menuItems: [
						{ textKey: 'printChart', onclick: function() { this.print(); } }, 
						{ separator: true }, 
						{ textKey: 'downloadPNG', onclick: function() { this.exportChart(); } }, 
						{ textKey: 'downloadJPEG',onclick: function() { this.exportChart({ type: 'image/jpeg' }); } }, 
						{ textKey: 'downloadSVG', onclick: function() { this.exportChart({ type: 'image/svg+xml' }); } }
					]
				}
			}
		}
	};

	@bindable chartOptions;

    constructor(element, taskQueue) {
    	Highcharts.setOptions({
    		global: {
    			useUTC: false
    		}
    	});
    	this.element = element;		
    	this.taskQueue = taskQueue;
    }
   
    chartOptionsChanged(value) {
    	let newSettings = {};
    	$.extend(true, newSettings, this.chartDefaults, value);
		this.taskQueue.queueMicroTask(() => 
			$(this.element).highcharts(newSettings)
		);
	}
}