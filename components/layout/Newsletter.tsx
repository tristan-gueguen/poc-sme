"use client";
import { Follow } from "@codegouvfr/react-dsfr/Follow";

export function Newsletter() {
  return (
    <Follow
      newsletter={{
        buttonProps: {
          onClick: function noRefCheck() {},
        },
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.",
      }}
      social={{
        buttons: [
          {
            linkProps: {
              href: "#facebook",
            },
            type: "facebook",
          },
          {
            linkProps: {
              href: "#twitter",
            },
            type: "twitter-x",
          },
          {
            linkProps: {
              href: "#linkedin",
            },
            type: "linkedin",
          },
          {
            linkProps: {
              href: "#instagram",
            },
            type: "instagram",
          },
          {
            linkProps: {
              href: "#youtube",
            },
            type: "youtube",
          },
        ],
      }}
    />
  );
}
