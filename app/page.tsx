import {redirect} from "@/i18n/navigation";

export default function IndexRedirect() {
  redirect({locale: "tr", href: "/"});
}

