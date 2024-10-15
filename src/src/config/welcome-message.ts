import { generateUTFDateFormat } from "@/utils/generate-date-format";
import { randomIp } from "@/utils/generate-randomip";

interface IWelcomeMessage {
  ascii: string[];
  message: string;
}

export const WELCOME_MESSAGE: IWelcomeMessage = {
  ascii: [
    "  __       __  __    __                  __                       ______                                           __                  ",
    "/  \\     /  |/  |  /  |                /  |                     /      \\                                         /  |                ",
    "$$  \\   /$$ |$$/  _$$ |_     ______   _$$ |_     ______        /$$$$$$  |  ______   _______    ______    ______  $$ |   __  __    __ ",
    "$$$  \\ /$$$ |/  |/ $$   |   /      \\ / $$   |   /      \\       $$ | _$$/  /      \\ /       \\  /      \\  /      \\ $$ |  /  |/  |  /  |",
    "$$$$  /$$$$ |$$ |$$$$$$/    $$$$$$  |$$$$$$/   /$$$$$$  |      $$ |/    |/$$$$$$  |$$$$$$$  |/$$$$$$  | $$$$$$  |$$ |_/$$/ $$ |  $$ |",
    "$$ $$ $$/$$ |$$ |  $$ | __  /    $$ |  $$ | __ $$    $$ |      $$ |$$$$ |$$    $$ |$$ |  $$ |$$ |  $$ | /    $$ |$$   $$<  $$ |  $$ |",
    "$$ |$$$/ $$ |$$ |  $$ |/  |/$$$$$$$ |  $$ |/  |$$$$$$$$/       $$ \\__$$ |$$$$$$$$/ $$ |  $$ |$$ \\__$$ |/$$$$$$$ |$$$$$$  \\ $$ \\__$$ |",
    "$$ | $/  $$ |$$ |  $$  $$/ $$    $$ |  $$  $$/ $$       |      $$    $$/ $$       |$$ |  $$ |$$    $$ |$$    $$ |$$ | $$  |$$    $$/ ",
    "$$/      $$/ $$/    $$$$/   $$$$$$$/    $$$$/   $$$$$$$/        $$$$$$/   $$$$$$$/ $$/   $$/  $$$$$$$ | $$$$$$$/ $$/   $$/  $$$$$$/  ",
    "                                                                                             /  \\__$$ |                              ",
    "                                                                                             $$    $$/                               ",
    "                                                                                              $$$$$$/                                ",
  ],
  message: `
Welcome to Mitate Gengaku Portfolio LTS (GNU/Linux x86_64)

<br />

|  |  |
|  :-- | :-- |
| Management: | https://x.com/mitate_gengaku |
| Support: | https://x.com/mitate_gengaku |

<br />

* System information as of ${generateUTFDateFormat()}

<br />

|               |                  |                            |               |
| :------------ | :--------------- | :------------------------- | :------------ |
| System load:  | 0.1              | Processes:                 | 100           |
| Usage of /:   | 6.3% of 227.73GB | Users logged in:           | 0             |
| Memory usage: | 100%             | IPv4 address for docker0:  | ${randomIp()} |
| Swap usage:   | 100%             | IPv4 address for enp2s0:   | ${randomIp()} |
| Temperature:  | 100.0 C          |                            |               |

<br />
                                                                            
* Super-optimized for my portfolio
      
<br />

https://x.com/mitate_gengaku

<br />

Type "help" to view a list of available commands.

<br />


Last login: ${generateUTFDateFormat()} from ${randomIp()}`,
};
