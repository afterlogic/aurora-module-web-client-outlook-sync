<?php

class OutlookSyncClientModule extends AApiModule
{
	public function GetAppData()
	{
		return array(
			'Plugin32DownloadLink' => '', // AppData.Links.OutlookSyncPlugin32
			'Plugin64DownloadLink' => '', // AppData.Links.OutlookSyncPlugin64
			'PluginReadMoreLink' => '' // AppData.Links.OutlookSyncPluginReadMore
		);
	}
}
