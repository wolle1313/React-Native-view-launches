export interface launchDataTypes {
  mission_name: string;
  launch_date_local: string;
  launch_site: launchSiteTypes;
  rocket: rocketTypes;
  launch_success: boolean;
  links: linksTypes;
  details?: string;
}
export interface detailsTypes {
  details?: string;
  links: linksTypes;
  mission_name: string;
}

interface launchSiteTypes {
  site_name_long: string;
}
interface linksTypes {
  article_link?: string;
  video_link?: string;
}
interface rocketTypes {
  rocket_name: string;
}
