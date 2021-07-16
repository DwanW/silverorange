import PostContent from './PostContent';
import { create } from 'react-test-renderer';

describe('Components', () => {
  const mockPost = {
    id: 'dd839012-1807-4a49-9b0c-61274f1802f5',
    title: 'Salvage',
    body: '# In et illo\n\n## Movere ora terque baculum colebatur\n\nLorem markdownum solito, vocat nata corripuere semper mitia tosta. Et ductae\ningreditur saevit vero penates laevum, et mihi longum, incalfacit est\ncommissaque, tuae locum. Redeuntis sulcat non magna\n[Sticteque](http://www.capillos.net/etsum.html), tua, ut Oceani. Mediusque adest\nsacra, [aut](http://www.mora.com/captus.html) iam Somnus nunc. Una facinus tibi\npraelata via vestem vidit minorem tacto cui?\n\n    if (southbridge(rate_file)) {\n        streaming(on_mirrored - copyright, 118971);\n        internic = right_hibernate;\n        nativeSimm.pinterestCloudPpga(primary);\n    }\n    eide_number(memory_mbps_rosetta(serverDvd - oem, -2, 1));\n    hard_subdirectory = 97 - 18;\n    if (icqMacintoshAlert == vdslHypermedia) {\n        nvramCableColumn = data_friendly(subnetScannerSocial + cms, frameMetal,\n                scraping_skyscraper);\n        firmwareControlMac(e_im, operation_telnet_metafile(3, javaDynamicKernel,\n                publishing_standalone_undo));\n        shortcut_newline_hard += netmask_signature;\n    }\n\n[Iubemur agris equo](http://viciniaper.io/) omne **curruque** proxima, meae nam,\n**adpropera** videt, litora novum, Sparte. Repetit terra, ducere prosiliunt me\nregis: Hippolytus iam poteram. Adsumere et tuque, mora tenet per et de hominis.\n\n## Supplex ardescit aequore rebus Hersilien exspectata ille\n\nEsse patrioque istis studiosius frui: laeta cum, facit caelum. Spiramenta furca\neris electus quod *semper sanguine infundere* illi: forte iram nec, in pietas\nquietis orbem, erat. Non virtute ardere cacumen perdere iramque iacuit super\nsenior placidissime caelo? Per tenebat supervolat filia damnandus, Epiros nec\npro perstet.\n\n- Nobis et temerat seductus\n- Tanto murra sanguinis humus victore imo amoris\n- Et et feri rursus\n\nEt tamen color; sacerdos est inpubibus\n[angues](http://www.incipiat.com/ipsaundis.php) est nec lenti palluit, tantum.\nBlandas Oliaros tuque pater! Hunc prima natarum, ira nocebant hasta filia, suo,\nnos sua signa, praepetis dixit tamen.\n\nCaput videam est dixit nisi, thracius praesaga una aliter, dimittit! Et\nfortisque talia et pingues nulloque vivacia dumque haberet fuit clamavit minus.',
    publishedAt: new Date('2016-01-26T20:17:00+0000'),
    author: {
      id: '9c99c399-4568-4079-960b-dbd333327b32',
      name: 'Bill Johnson',
    },
  };

  it('PostContent renders correctly', () => {
    const component = create(
      <PostContent post={mockPost} resetCurrentPost={() => null} />
    );
    expect(component).toMatchInlineSnapshot(`
      <div
        className="container"
      >
        <button
          className="return-button"
          onClick={[Function]}
        >
          ❮ Return
        </button>
        <div
          dangerouslySetInnerHTML={
            Object {
              "__html": "<h1 id=\\"in-et-illo\\">In et illo</h1>
      <h2 id=\\"movere-ora-terque-baculum-colebatur\\">Movere ora terque baculum colebatur</h2>
      <p>Lorem markdownum solito, vocat nata corripuere semper mitia tosta. Et ductae
      ingreditur saevit vero penates laevum, et mihi longum, incalfacit est
      commissaque, tuae locum. Redeuntis sulcat non magna
      <a href=\\"http://www.capillos.net/etsum.html\\">Sticteque</a>, tua, ut Oceani. Mediusque adest
      sacra, <a href=\\"http://www.mora.com/captus.html\\">aut</a> iam Somnus nunc. Una facinus tibi
      praelata via vestem vidit minorem tacto cui?</p>
      <pre><code>if (southbridge(rate_file)) {
          streaming(on_mirrored - copyright, 118971);
          internic = right_hibernate;
          nativeSimm.pinterestCloudPpga(primary);
      }
      eide_number(memory_mbps_rosetta(serverDvd - oem, -2, 1));
      hard_subdirectory = 97 - 18;
      if (icqMacintoshAlert == vdslHypermedia) {
          nvramCableColumn = data_friendly(subnetScannerSocial + cms, frameMetal,
                  scraping_skyscraper);
          firmwareControlMac(e_im, operation_telnet_metafile(3, javaDynamicKernel,
                  publishing_standalone_undo));
          shortcut_newline_hard += netmask_signature;
      }
      </code></pre>
      <p><a href=\\"http://viciniaper.io/\\">Iubemur agris equo</a> omne <strong>curruque</strong> proxima, meae nam,
      <strong>adpropera</strong> videt, litora novum, Sparte. Repetit terra, ducere prosiliunt me
      regis: Hippolytus iam poteram. Adsumere et tuque, mora tenet per et de hominis.</p>
      <h2 id=\\"supplex-ardescit-aequore-rebus-hersilien-exspectata-ille\\">Supplex ardescit aequore rebus Hersilien exspectata ille</h2>
      <p>Esse patrioque istis studiosius frui: laeta cum, facit caelum. Spiramenta furca
      eris electus quod <em>semper sanguine infundere</em> illi: forte iram nec, in pietas
      quietis orbem, erat. Non virtute ardere cacumen perdere iramque iacuit super
      senior placidissime caelo? Per tenebat supervolat filia damnandus, Epiros nec
      pro perstet.</p>
      <ul>
      <li>Nobis et temerat seductus</li>
      <li>Tanto murra sanguinis humus victore imo amoris</li>
      <li>Et et feri rursus</li>
      </ul>
      <p>Et tamen color; sacerdos est inpubibus
      <a href=\\"http://www.incipiat.com/ipsaundis.php\\">angues</a> est nec lenti palluit, tantum.
      Blandas Oliaros tuque pater! Hunc prima natarum, ira nocebant hasta filia, suo,
      nos sua signa, praepetis dixit tamen.</p>
      <p>Caput videam est dixit nisi, thracius praesaga una aliter, dimittit! Et
      fortisque talia et pingues nulloque vivacia dumque haberet fuit clamavit minus.</p>
      ",
            }
          }
        />
      </div>
    `);
  });
});
